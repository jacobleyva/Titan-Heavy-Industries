import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'


const initState = {
    items: [
        {id:1,title:'Kazama Jacket', desc: "★ Genuine Kazama ★", price:120,img:Item1},
        {id:2,title:'Toyota TRD Jacket', desc: "★ Genuine Toyota ★", price:100,img:Item2},
        {id:3,title:'BLITZ Jacket', desc: "★ Genuine BLITZ ★", price:80,img:Item3},
        {id:4,title:'Nismo Racing Team Jacket', desc: "★ Genuine Nismo ★", price:90,img:Item4},
        {id:5,title:'Toyota Jacket', desc: "★ Genuine Toyota ★", price:110,img:Item5},
        {id:6,title:'Kakimoto Jacket', desc: "★ Genuine Kakimoto ★", price:95,img:Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{

}
export default cartReducer;