import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity = ()=>{
        // this.state.qty +=1;
        // console.log('this',this.state);
        // setState form 1
        this.setState({
            qty: this.state.qty+1
        });
        // setState form 2 , 
    //     this.setState((prevState)=>{

    //     return {
    //         qty: prevState.qty+1
    //     }
    // });
    }
    decreaseQuantity = ()=>{
        // this.state.qty +=1;
        // console.log('this',this.state);
        // setState form 1
        const {qty}=this.state;
        if(qty === 0){
            return;
        }
        // this.setState({
        //     qty: this.state.qty-1
        // });
        // setState form 2 , 
        this.setState((prevState)=>{

        return {
            qty: prevState.qty-1
        }
    });
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div>
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{price}</div>
                    <div style={{ color: '#777' }}>Rs {title}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-action">
                        {/* {Button} */}
                        <img alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                        />

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 100,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;