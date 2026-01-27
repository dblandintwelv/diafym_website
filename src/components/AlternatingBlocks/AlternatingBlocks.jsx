import React from 'react';
import { motion } from 'framer-motion';
import './AlternatingBlocks.css';

const AlternatingBlocks = ({ blocks, showDownloadButton = false }) => {
  return (
    <div className="alternating-blocks">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`alternating-block ${block.isReversed ? 'reversed' : ''}`}
        >
          <div className="text-content">
            <h3>{block.title}</h3>
            {typeof block.description === 'string' ? (
              <p
                dangerouslySetInnerHTML={{ __html: block.description }}
              />
            ) : (
              <p>{block.description}</p>
            )}
            {block.link && (
              <p>
                <a href={block.link.url} target="_blank" rel="noopener noreferrer">
                  {block.link.text}
                </a>
              </p>
            )}
            {showDownloadButton && block.pdfUrl && (
              <a 
                href={block.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-button"
              >
                Téléchargez maintenant
              </a>
            )}
          </div>
      <motion.div 
        className="image-content"
            initial={{ opacity: 0, x: block.isReversed ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
      >
            <img src={block.image} alt={block.title} />
      </motion.div>
    </div>
      ))}
    </div>
  );
};

export default AlternatingBlocks; 