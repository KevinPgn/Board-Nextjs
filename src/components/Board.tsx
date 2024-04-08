"use client"
import "../styles/Board.css"
import { useRouter } from "next/navigation"
import { upvoteComment, downvoteComment } from "@/server/Actions"

export const Board = ({title, comment}: any) => {
  const router = useRouter()
  return <>
  <section className="board">
    <h2>{title.title}</h2>

    <div className="container-board">
      <div className="header">
        <button 
        onClick={() => router.push(`/addProposition/${title.id}`)}
        className="btn-proposition">Create Proposition</button>
      </div>

      <div className="commentaires">
        {
          comment.map((commentaire: any) => (
            <div key={commentaire.id} className="commentaire">
              <p>{commentaire.comment}</p>
              <div className="vote">
                <button 
                onClick={() => upvoteComment(commentaire.id)}
                className="upvote">Upvote
                <span>
                  {commentaire.upvotes}
                </span>
                </button>
                <button 
                onClick={() => downvoteComment(commentaire.id)}
                className="downvote">Downvote
                <span>
                  {commentaire.downvotes}
                </span>
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
  </>
}