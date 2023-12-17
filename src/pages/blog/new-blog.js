import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Siderbar from '../../helpers/siderbar';
import withAuth from '@/customHook/withAuth';
import axios from 'axios';
import { uploadImages } from '@/customHook/uploadImage';
import dynamic from 'next/dynamic'; 


const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });


const url = 'https://api.newworldtrending.com/blog';

const BlogPage = () => {
    const route = useRouter();
    const editor = useRef(null);

    const initialData = {
        title: "",
        bannerImg:[],
        permalink: "",
        content: '',
        metaTitle: "",
        metaDescription: "",
        categories: [],
        tags: [],
        featuredImages: [],
        author: "",
        status: "draft",
        instagramLink: "https://www.instagram.com/newworld.trending/",
        youtubeLink: "https://youtube.com/@NWT_YT?feature=shared",
        facebookLink: "",
        adminId: '',
        categoryId:'',
    };


    const [blogData, setBlogData] = useState(initialData);



    function handleMultipleImage(e) {
        const fileList = e.target.files;

        // Convert FileList to an array and update state
        const newImages = Array.from(fileList);
        setBlogData({
            ...blogData,
            featuredImages: newImages,
        });
    }

    function handleBannerImg(e) {
        // console.log(e.target.)
        const fileList = [e.target.files[0]]
        setBlogData({
            ...blogData,
            bannerImg: fileList
        })
    }

    const handleInputChange = (field, value) => {
        setBlogData({
            ...blogData,
            [field]: value,
        });
    };


    async function handleAddBlog(e) {
        e.preventDefault()
        // console.log(blogData)
        const uploadBanner = await uploadImages(blogData.bannerImg)
        const UploadedImg = await uploadImages(blogData.featuredImages)

        try {
            const res = await axios.post(url + '/add_blog', { ...blogData, featuredImages: UploadedImg ,bannerImg:uploadBanner})

            // console.log(res)
            alert(res.data.message)
        }
        catch (err) {
            console.log(err)
        }

    }

    const[categories,setCategories] = useState([])



    async function fetchCategories() {
        try {
            const res = await axios.get(url + '/category');
            // console.log(res.data)
            setCategories(res.data.categories)
        }
        catch (err) {
            console.log(err)
            setCategories([])
        }
    }




    useEffect(() => {

        fetchCategories()
        setBlogData({
            ...blogData,
            adminId:sessionStorage.getItem('userId')
       }) 
    },[])

    return (
        <>
            <Siderbar />
            <div>
                <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">

                    <form onSubmit={handleAddBlog}>
                        <div className="card md-12">
                            <div className="card-body row container gx-4 gy-4">

                                <div className="pt pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">Add Blog Here</h5>
                                </div>

                                <div className="md-12">
                                    <label htmlFor="title" className="form-label"> Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={blogData.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                    />
                                </div>
                                <div className="md-12">
                                    <label htmlFor="formFile" className="form-label">Banner Image</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="formFile"
                                        onChange={(e) => handleBannerImg(e)}
                                    />
                                </div>

                                <div className="md-12">
                                    <label htmlFor="content" className="form-label">Content</label>
                                    
                                    <JoditEditor
                                        ref={editor}
                                        value={blogData.content}
                                        // config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        
                                        onChange={newContent => { handleInputChange('content', newContent); }}
                                    >

                                    </JoditEditor>

                                </div>
                                <div className="md-12">
                                    <label htmlFor="Meta Title" className="form-label">Meta Title</label>
                                    <input
                                        className="form-control"
                                        id="metaTitle"
                                        value={blogData.metaTitle}
                                        onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                                    />
                                </div>
                                <div className="md-12">
                                    <label htmlFor="metaDescription" className="form-label">Meta Description</label>
                                    <textarea
                                        className="form-control"
                                        id="metaDescription"
                                        value={blogData.metaDescription}
                                        onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="categories" className="form-label">
                                        Category
                                    </label>
                                    <select className="form-select" id="categories" onChange={(e) => handleInputChange('categoryId', e.target.value)}>
                                        <option value="">Select Category</option>
                                        {categories.length > 0 &&
                                            categories.map((cate) => (
                                                <option key={cate.id} value={cate.id}>
                                                    {cate.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>


                                <div className="md-12">
                                    <label htmlFor="categories" className="form-label">Keywords</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="categories"
                                        value={blogData.categories.join(', ')}
                                        onChange={(e) => handleInputChange('categories', e.target.value.split(', '))}
                                    />
                                </div>
                                <div className="md-12">
                                    <label htmlFor="tags" className="form-label">Tags</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="tags"
                                        value={blogData.tags.join(', ')}
                                        onChange={(e) => handleInputChange('tags', e.target.value.split(', '))}
                                    />
                                </div>
                                <div className="md-12">
                                    <label htmlFor="featuredImages" className="form-label">Featured Images</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="featuredImages"
                                        multiple
                                        onChange={(e) => handleMultipleImage(e)}
                                    />
                                </div>
                                <div className="md-12">
                                    <label htmlFor="author" className="form-label">Author</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        value={blogData.author}
                                        onChange={(e) => handleInputChange('author', e.target.value)}
                                    />
                                </div>
                                <div className="md-12">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select
                                        className="form-select"
                                        id="status"
                                        value={blogData.status}
                                        onChange={(e) => handleInputChange('status', e.target.value)}
                                    >
                                        <option value="published">Published</option>
                                        <option value="draft">Draft</option>
                                    </select>
                                </div>
                                <div className="md-12">
                                    <label htmlFor="instagramLink" className="form-label">Instagram Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="instagramLink"
                                        value={blogData.instagramLink}
                                        onChange={(e) => handleInputChange('instagramLink', e.target.value)}
                                    />
                                </div>
                                <div className="md-12">
                                    <label htmlFor="youtubeLink" className="form-label">YouTube Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="youtubeLink"
                                        value={blogData.youtubeLink}
                                        onChange={(e) => handleInputChange('youtubeLink', e.target.value)}
                                    />
                                </div>
                                <div className="md-12">
                                    <label htmlFor="facebookLink" className="form-label">Facebook Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="facebookLink"
                                        value={blogData.facebookLink}
                                        onChange={(e) => handleInputChange('facebookLink', e.target.value)}
                                    />
                                </div>
                                <br />
                                <div className="d-flex justify-content-center mt-5">
                                    {/* <button className="btn btn-primary" onClick={() => console.log('Edit clicked')}>
                                    Edit
                                </button> */}
                                    <button
                                        className="btn btn-secondary"
                                        type='submit'
                                    >
                                        Add Blog
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default withAuth(BlogPage);
