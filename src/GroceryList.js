import { Component } from "react";
import check from './check.png';

export class GroceryList extends Component {


    state = {             // тут вписываем то что будет меняться
        userInput:'',
        groceryList: []      // тут будут массивы

    }

onChangeEvent(e){
    this.setState({userInput: e})

}
     
        addItem(input){
            if (input === ''){
                alert ('Please enter an item')
            }
            else{
            let listArray = this.state.groceryList    // - переменная куда будут попать все наши дела
            listArray.push(input)    // push- метод для массива
            this.setState({groceryList: listArray, userInput :''})
        }
    }
        

        deleteItem(){
            let listArray = this.state.groceryList;    // хотим получить доступ к списку
            listArray = [];                   // аннулировать этот список (удалить один продукт)
            this.setState({groceryList: listArray});

        }

         
        crossedWord(event){
            const li = event.target;         // подслушка на li
            li.classList.toggle('crossed')    // добавлянем название класса
        }
         
        onFormSubmit(e){ 
            e.preventDefault();         // что бы страница не перезагружалась при нажатии на enter
        }
 
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container" >
                <input type='text'
                placeholder="What to you want to buy" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}} // получаем доступ к тому что прописывает пользователь
                value={this.state.userInput}/>     
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className='add'>Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={check} width='40px' alt="check" />
                        {item}
                        </li>
                ))}      
            </ul>
            <div className="container">
            <button onClick={()=> this.deleteItem()} className='delete'>Delete</button>
            </div>
            </form>
            </div>
        )
    }

}