import React from 'react';
import { motion } from 'framer-motion';
import DetailCard from './DetailCard';
import { XIcon } from './Icon';

class ProductDetailsView extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = (event) => {
    if (event.keyCode === 27) {
      this.props.onHideDetails();
    }
  };

  render() {
    const { product, onHideDetails } = this.props;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="details-modal-overlay"
        onClick={onHideDetails}
      >
        <motion.div
          layoutId="product-card"
          className="details-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="details-modal-header">
            <div className="header-info">
              <motion.img
                layoutId="product-image"
                src={product.imageUrl}
                alt={product.name}
                className="details-header-image"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/cccccc/ffffff?text=Error'; }}
              />
              <div className="header-text">
                <motion.h2 layoutId="product-name" className="details-title">{product.name}</motion.h2>
                <p className="details-subtitle">{product.description}</p>
              </div>
            </div>
            <button onClick={onHideDetails} className="close-button">
              <XIcon />
            </button>
          </div>
          <div className="details-modal-body">
            <div className="details-grid">
              <DetailCard title="Key Features" icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}>
                <div className="feature-tags">
                  {product.features.map((feature, index) => <span key={index} className="feature-tag">{feature}</span>)}
                </div>
              </DetailCard>
              <DetailCard title="Nutrition Facts" icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon nutrition-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}>
                <ul className="nutrition-list">
                  {Object.entries(product.nutrition).map(([key, value]) => (
                    <li key={key}>
                      <span>{key}:</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </DetailCard>
              <DetailCard title="Traceability" icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon traceability-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>
                <ul className="traceability-list">
                  <li><strong>Origin:</strong> <span>{product.traceability.origin}</span></li>
                  <li><strong>Harvest Date:</strong> <span>{product.traceability.harvestDate}</span></li>
                </ul>
              </DetailCard>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}

export default ProductDetailsView;
