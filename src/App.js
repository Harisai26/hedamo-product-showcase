import React from 'react'
import {AnimatePresence} from 'framer-motion'
import ProductSummaryCard from './components/ProductSummaryCard'
import ProductDetailsView from './components/ProductDetailsView'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProduct: null,
    }
    this.productData = {
      id: 1,
      name: 'Hedamo Organic Honey',
      imageUrl: 'https://placehold.co/150x150/f59e0b/white?text=Honey',
      category: 'Food',
      description: 'Pure wild honey harvested from organic farms.',
      features: ['Unprocessed', 'Nutrient-rich', 'Eco-friendly'],
      nutrition: {calories: 70, sugar: '15g', protein: '0.5g', fat: '0g'},
      traceability: {origin: 'Himalayan Valleys', harvestDate: '2024-07-15'},
      reviews: [
        {id: 1, user: 'Alice', rating: 5, comment: 'Amazing taste!'},
        {id: 2, user: 'Bob', rating: 4, comment: 'Very good quality.'},
      ],
      rating: 4.5,
    }
  }

  componentDidUpdate(_, prevState) {
    if (!prevState.selectedProduct && this.state.selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else if (prevState.selectedProduct && !this.state.selectedProduct) {
      document.body.style.overflow = 'auto'
    }
  }

  handleShowDetails = () => {
    this.setState({selectedProduct: this.productData})
  }

  handleHideDetails = () => {
    this.setState({selectedProduct: null})
  }

  render() {
    const {selectedProduct} = this.state

    return (
      <div className='showcase-container'>
        <div className='showcase-wrapper'>
          <h1 className='main-title'>Product Showcase</h1>
          <ProductSummaryCard
            product={this.productData}
            onShowDetails={this.handleShowDetails}
          />
        </div>
        <AnimatePresence>
          {selectedProduct && (
            <ProductDetailsView
              product={selectedProduct}
              onHideDetails={this.handleHideDetails}
            />
          )}
        </AnimatePresence>
      </div>
    )
  }
}
