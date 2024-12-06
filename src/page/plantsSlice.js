import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {   id:4981654329,
        name:'plant 4',
        imgUrl:"pro4.jpg",
        price:'23',
        info:'some of pragraph about the plant',
        category:'Aromatic Fragrant',
        quantity:1
    },
    {   id:1552433675,
        name:'plant 5',
        imgUrl:"pro5.jpg",
        price:'25',
        info:'some of pragraph about the plant',
        category:'Aromatic Fragrant',
        quantity:1
    },
    {   id:6872654133,
        name:'plant 6',
        imgUrl:"pro6.jpg",
        price:'10',
        info:'some of pragraph about the plant',
        category:'Aromatic Fragrant',
        quantity:1
    },
    {   id:776255431,
        name:'plant 7',
        imgUrl:"pro7.jpg",
        price:'15',
        info:'some of pragraph about the plant',
        category:'Air Purifying',
        quantity:1
    },
    {   id:9825541998,
        name:'plant 8',
        imgUrl:"pro8.jpg",
        price:'14',
        info:'some of pragraph about the plant',
        category:'Air Purifying',
        quantity:1
    },
    {   id:14426544539,
        name:'plant 9',
        imgUrl:"pro9.jpg",
        price:'12',
        info:'some of pragraph about the plant',
        category:'Air Purifying',
        quantity:1
    },
    {   id:16544341330,
        name:'plant 10',
        imgUrl:"pro10.jpg",
        price:'9',
        info:'some of pragraph about the plant',
        category:'Flowering',
        quantity:1
    },
    {   id:115541332256,
        name:'plant 11',
        imgUrl:"pro11.jpg",
        price:'30',
        info:'some of pragraph about the plant',
        category:'Flowering',
        quantity:1
    },
    {   id:16554322167982,
        name:'plant 12',
        imgUrl:"pro12.jpg",
        price:'27',
        info:'some of pragraph about the plant',
        category:'Flowering',
        quantity:1
    }
];

const plantsSlice=createSlice({
    name:'plants',
    initialState,
    reducers:{}
})

export default plantsSlice.reducer;