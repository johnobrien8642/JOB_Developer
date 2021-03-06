import React, { useState, useRef, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory, Link } from 'react-router-dom';
import randomstring from 'randomstring';
import Cookies from 'js-cookie';

import TextPostInput from '../../util/components/forms/inputTypes/Text_Post_Input'
import BodyImageAndText from '../../util/components/forms/Body_Image_And_Text'

import Mutations from '../../../../graphql/mutations.js';
import PostFormUtil from '../../util/functions/post_form_util.js';
const { bodyPost, handleFormData,
        stripAllImgs, handleUploadedFiles,
        resetDisplayIdx,
        handleAllTextTextPost,
        preventScroll } = PostFormUtil;
const { CREATE_OR_UPDATE_POST } = Mutations;

const TextPostForm = ({
  post,
  update,
  mainForm,
  textPostActive,
  dashboardFeed
}) => {
  let [title, setTitle] = useState('');

  let objsToClean = useRef([]);
  let [description, setDescription] = useState('');
  let [bodyImageFiles, setBodyImageFiles] = useState([]);
  let body = useRef([]);
  let allText = useRef('');
  let [errMessage, setErrMessage] = useState('');
  let [render, setRender] = useState(0);
  let history = useHistory();
  const formId = 'textPostForm'
  const formInputId = 'textPostInput'

  useEffect(() => {

    preventScroll(textPostActive, document)

  }, [textPostActive])
  
  useEffect(() => {
    resetDisplayIdx(body)
  })

  let [createOrUpdatePost] = useMutation(CREATE_OR_UPDATE_POST, {
    onCompleted() {
      resetInputs();
      history.push('/')
    },
    onError(error) {
      console.log(error)
    }
  });

  const resetInputs = () => {
    objsToClean.current = [];
    setTitle(title = '');
    body.current = []
    allText.current = '';
    setDescription(description = '')
    setBodyImageFiles(bodyImageFiles = []);
    setErrMessage(errMessage = '');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    var bodyImagesFormData = handleFormData(bodyImageFiles)
  
    Promise.all([
      bodyPost(bodyImagesFormData)
    ]).then(
      ([bodyUploads]) => {

        var descriptions = stripAllImgs(body)

        handleAllTextTextPost(allText, descriptions, title)

        var instanceData = {
          variants: {
            title: title
          },
          allText: allText.current,
          descriptions: descriptions,
          descriptionImages: handleUploadedFiles(body, bodyUploads),
          user: Cookies.get('currentUser'),
          kind: 'TextPost',
          objsToClean: objsToClean.current,
          postId: post ? post._id : null
        }
        
        createOrUpdatePost({
          variables: {
            instanceData: instanceData
          }
        })
      }
    )
  }

  const disabledBool = () => {
    return !title && body.current.length === 0 && !description && (update && mainForm)
  }
  
  if (textPostActive || update) {
    return (
    <div
      className={update ? 'postFormContainer update' : 'postFormContainer'}
    >

      <div
        className={'postform textPostForm'}
      >
        <form
          id={formId}
          onSubmit={e => handleSubmit(e)}
          onKeyPress={e => { e.key === 'Enter' && e.preventDefault() }}
          encType={'multipart/form-data'}
        >
  
        <TextPostInput
          post={post}
          update={update}
          mainForm={mainForm}
          formInputId={formInputId}
          title={title}
          setTitle={setTitle}
          render={render}
          setRender={setRender}
          dashboardFeed={dashboardFeed}
        />
  
        <BodyImageAndText
          displayBodyImageAndTextInput={true}
          mainForm={mainForm}
          post={post}
          update={update}
          formId={formId}
          formInputId={formInputId}
          objsToClean={objsToClean}
          body={body}
          bodyImageFiles={bodyImageFiles}
          setBodyImageFiles={setBodyImageFiles}
          description={description}
          setDescription={setDescription}
          render={render}
          setRender={setRender}
          errMessage={errMessage}
          setErrMessage={setErrMessage}
          dashboardFeed={dashboardFeed}
        />

          <div
            className='postBtnContainer'
          >
            <Link
              className='closeLink'
              to='/dashboard'
            >
              Close
            </Link>

            <button
              type='submit'
              className={disabledBool() ? 'formSubmitBtn disabled' : 'formSubmitBtn'}
              disabled={disabledBool()}
              onClick={() => {
                if (description) {
                  var textObj = {
                    kind: 'text',
                    srcType: 'text',
                    content: description,
                    displayIdx: body.current.length,
                    uniqId: randomstring.generate({
                      length: 12,
                      charset: 'alphabetic'
                    })
                  }

                  body.current.push(textObj)
                
                  setDescription(description = '')
                }
              }}
            >
              {post ? 'Update' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default TextPostForm;