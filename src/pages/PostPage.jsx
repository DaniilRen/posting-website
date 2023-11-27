import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetching from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'

export default function PostPage() {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])

	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getPostById(params.id)
		setPost(response.data)
	})

	const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
		const response = await PostService.getPostCommentById(params.id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById()
		fetchComments()
	}, [])

	return (
		<div>
			<h1>Вы на странице поста с ID = {params.id}</h1>
			{isLoading
				? <Loader/>
				: <div>{post.id}. {post.title}</div>
			}
			<h1>
				Комментарии
			</h1>
			{isCommentsLoading
				? <Loader/>
				: <div>
					{comments.map(comm => 
						<div key={comm.id} style={{marginTop: 15}}>
							<h5>{comm.email}</h5>
							<div>{comm.body}</div>
						</div>
					)}
				</div>
			}
		</div>
	)
}