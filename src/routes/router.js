import getData from '../utils/getData'
import '../components/card'
const a = document.getElementById('cards')

const router = async()=>{
    let data = await getData()
    console.log(data)
}

export default router