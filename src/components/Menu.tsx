"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { DeleteTitle } from "./ui/DeleteTitle"
import { ToastContainer } from "react-toastify"

export const Menu = ({title}: any) => {
  const router = useRouter()
  return <>
    <main>
        <h1>Board list</h1>

        <div className="container">
          <div className="left">
            {
              title.map((item: any) => (
                <div key={item.id} className="title-content">
                  <Link href={`/board/${item.id}`}>{item.title}</Link>
                  <DeleteTitle id={item.id} />
                </div>
              ))
            }
          </div>
          <div className="right">
            <button 
            className="create-button"
            onClick={() => router.push('/add')}>Create Board
            </button>
          </div>
        </div>
    </main>

    <ToastContainer />
  </>
}