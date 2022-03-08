// import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
// import AddPopup from '../components/AddPopup/AddPopup';
// import './Table.css';

const Table = () => {

    const [items , setItem] = useState('');
    const [updateItem, updatedItem] = useState([]);

    const [addPopupItem, setPopupItem] = useState('');
    const [isOpen, setisOpen] = useState('false');
    const [editItem, setEditItem] = useState(false);

    const addName = (nm) => {
        setItem(nm.target.value);
    }
  
    useEffect(() => {
        if (editItem) {
            let itemArr;
            updateItem.splice(isOpen, 1, items);
            itemArr = [...updateItem];
            setEditItem(false);
            updatedItem(itemArr);
            localStorage.setItem("itemList", JSON.stringify(itemArr));
            setItem('')
            setPopupItem('');
            setisOpen('false');
          
        }
    }, [editItem])

    // ========add-items-in-table
    const storedVal = () => {
        if(items.trim() !== ''){
            let itemArr;
            itemArr = [...updateItem, items];
           
            updatedItem(itemArr);
        
            setItem("");

            localStorage.setItem("itemList", JSON.stringify(itemArr));
        }
    }
    const addItems = (e) => {
        e.preventDefault();

        console.log(addPopupItem)
        storedVal();

    }

    // delete-items-from-table====
    const deleteItem = (id) => {

        let arr = updateItem.filter((arr, index ) => {
            return index !== id;
        });

        updatedItem(arr);
        localStorage.setItem("itemList", JSON.stringify(arr));
        
        
    }

const editedItemValue = () => {
    setItem(addPopupItem);
    setEditItem(true);

}
const cancelItemValue = () => {
    setisOpen('false');
}
    const togglePopup = (index, val) => {
        setisOpen(index);
    }

    //==========fetch-item-on-loading
    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('itemList'));
        if(localStorageData && localStorageData.length){
            updatedItem(localStorageData);
        }
    }, [editItem])

    // window.addEventListener('load', () =>{
           
    // });

    

    // console.log(updateItem,"updateItemupdateItem")

    return(
        

            <div className='wrapper'>
                   {/* {isOpen && 
                   <AddPopup 
                    handleClose  = {(togglePopup)} 
                    itemValue={addPopupItem} 
                    clickUpdateVal={(val) => console.log(val)}
                    />} */}
                <div className='table-input-group p-3 mb-5'>
                    <form>
                <input 
                    className='form-control px-3 mb-3'
                    name = 'itemName'
                    type= 'text'
                    value={items}
                    placeholder='Enter Name'
                    onChange={addName}
                />
                 {/* <input 
                    className='form-control px-3 mb-3'
                    name = 'itemName'
                    type= 'email'
                    placeholder='Enter Email'
                    onChange={addEmail}
                /> */}
               <button  className='btn primary-btn' style={{backgroundColor: 'Blue', fontSize: '18px', color: 'white', border: '1px solid white', padding: '10px 20px', cursor: 'pointer', fontWeight: '600', borderRadius: '50px'}} 
               
               onClick={addItems}> Submit</button> 

               </form>
               </div>


               <div className='table-wrapper'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Item no</th>
                        <th>Item Name</th>
                        {/* <th>Email</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {updateItem?.map((val, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{isOpen == index  ? <input value={addPopupItem} onChange={e => setPopupItem(e.target.value)}/> :  val}</td>
                                
                               <td>
                               {isOpen == index  ? <div className='actions-btn'>
                                   <button className='btn save-btn btn-info me-2' onClick={editedItemValue}>Save </button>
                                  <button className='btn cancel-btn btn-danger' onClick={cancelItemValue}>Cancel</button>
                               </div>:
                               <div className='actions-btn'>
                                <span className='editIcon text-success me-3'><i className="fas fa-edit" onClick={() => {togglePopup(index , val)
                                    }}></i></span>
                                    <span className='deleteIcon text-danger'><i className="fas fa-trash"  onClick={() => {
                                        deleteItem(index)
                                    }}></i></span>
                               </div>
                                   
                                 }
                                </td>

                            </tr>
                        )
                    })}


                       
                </tbody>
            </table>
            </div>

         
            </div>
        
    )
}


export default Table;


// Rest API
// CRUD operations