import '../../styles/Menu.css'
import { RxCross1 } from "react-icons/rx";
import { deleteTitle } from "@/server/Actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  id: string
}

export const DeleteTitle = ({id}: Props) => {
  const handleDelete = async () => {
    try {
      await deleteTitle(id)
      toast.success('Title deleted')
    } catch (error) {
      toast.error('Failed to delete title')
    }
  }
  
  return <>
    <button 
    className="delete-button"
    onClick={() => handleDelete()}><RxCross1 />
    </button>
  </>
}