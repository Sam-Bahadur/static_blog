import React, { Component } from 'react'
import BookItem from './../widgetsUI/BookItem';
import ImageSlider from './../ImageSlider/ImageSlider';


class Body extends Component {
    constructor(){
        super();
        this.state={
            search : ''
        };
    }

    updateSearch(event){
        this.setState({
            search: event.target.value.substr(0,20)
        })
        console.log(this.state.search);
    }
    componentDidMount(){

    }

    renderItems = () => (null
        //         blogs.list ? blogs.list.map(item=>(
        //         <>
        //     <BookItem {...item} key={item._id}/>
        //     <div className="blog_card_dividor"></div>
        //     </>
        // )) :null
        )
    
    imageSlide = ()=>(
            <>
            <ImageSlider />
            </>
        )

    loadmore =()=>{
        
    }

    render() {
        // let  filteredTitle = this.props.blogs;
        return (
            <>
            <div className="home_div">
            {this.imageSlide()}
            <div className="home_content">
                <div className="blog_name_container">
                <span>Blog Posts</span> 
                {/* <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}></input> */}
                </div>
              {/* {this.renderItems(this.props.blogs)} */}
              {/* {this.renderItems(filteredTitle)} */}
              <div onClick={this.loadmore} className="loadmore_alt"
            //   className="loadmore"> 
            >
                  Load more >
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default Body