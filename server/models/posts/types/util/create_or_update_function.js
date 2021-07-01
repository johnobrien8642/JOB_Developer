import mongoose from 'mongoose';
import aws from 'aws-sdk';
import keys from '../../../../config/keys.js';
import CreateOrUpdateFunctionUtil from './create_or_update_function_util.js';
import DeleteFunctionUtil from './delete_function_util.js';
const User = mongoose.model('User');
const Post = mongoose.model('Post');
const PostIndex = mongoose.model('PostIndex');
const s3 = new aws.S3();

var s3Client = new aws.S3({
  secretAccessKey: keys.secretAccessKey,
  accessKeyId: keys.accessKeyId,
  region: 'us-east-1'
})

const { getTagArr, asyncTag, findOrCreateTag,
        handleMentions, asyncMention, findOrCreateMention,
        createImagesFromLinks, asyncImageLink,
        updateUploadDispIdx, asyncUpdateUpload,
        returnInstancesOnly, returnNewImageLinksOnly,
        returnMentionInstancesOnly,
        allImgObjsSorted, pushDescriptionImgObjs,
        pushDescriptions, pushTags, pushMentions, 
        markModified, handleVariants, handleUpdateIndex, 
        createInstance, resetFoundPost, handleAllText } = CreateOrUpdateFunctionUtil;
const { cleanupMention, handles3AndObjectCleanup } = DeleteFunctionUtil;


//Reposts are handled in mutation file in #repost        
const createOrUpdatePost = ({
  variants,
  allText,
  descriptions,
  descriptionImages,
  user,
  kind,
  objsToClean,
  postId
}) => {
  var update = postId ? true : false
  
  var uploads = returnInstancesOnly(descriptionImages)
  var imageLinks = returnNewImageLinksOnly(descriptionImages)
  
  return Promise.all([
    updateUploadDispIdx(uploads, asyncUpdateUpload),
    createImagesFromLinks(imageLinks, asyncImageLink),
    User.findOne({ blogName: user }),
    Post.findById(postId),
    PostIndex.find({}),
    handles3AndObjectCleanup(objsToClean, s3Client, keys),
  ]).then(
    ([updatedUploads,
      linkImages,
      user, 
      foundPost,
      index,
      cleaneds3AndObjs]) => {
      
      if (update) {
        var instance = foundPost
        resetFoundPost(instance)
      } else {
        var instance = createInstance(kind)
      }
      
      return handleVariants(variants, instance, user).then(() => {

        handleAllText(allText, instance)
        
        pushDescriptions(descriptions, instance)

        var readyDescriptionImgs = allImgObjsSorted(
          linkImages, updatedUploads
        )
    
        pushDescriptionImgObjs(readyDescriptionImgs, instance)

        handleUpdateIndex(index[0], instance)

        if (update) {
          instance.updatedAt = Date.now()
        }
        
        return Promise.all([instance.save(), index[0].save()]).then(
          ([instance, index])=> (instance)
        ) 
      })
    }
  )
}

export default createOrUpdatePost;