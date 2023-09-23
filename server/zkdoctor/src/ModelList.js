import React from 'react';

import './ModelList.css';



const models = [
    {id:1, name: 'Breast Cancer', description: 'Detect early signs of breast cancer', downloads: 312, model_path: '', image: 'breast.jpg', author: 'National Cancer Institute'},
    {id:2, name: 'Diabetes', description: 'Check if you have a diabetes', downloads: 428, model_path: '', image: 'diabetes.jpg', author: 'National Institute of Diabetes and Digestive and Kidney Diseases'},
    {id:3, name: 'Heart Disease', description: 'Analyze risks of heart disease', downloads: 10092, model_path: '', image: 'heart.jpg', author: 'National Heart, Lung, and Blood Institute'},
    {id:4, name: 'Skin Cancer', description: 'Spot skin cancer (melanoma) early', downloads: 187371, model_path: '', image: 'skin.jpg', author: 'National Cancer Institute'},
  // add more models here
];

function ModelList() {
  return (
    <div className="model-list">
      <h2>Available Diagnostic Models</h2>
      <table>
        <tbody>
          <tr>
            {models.slice(0, 2).map((model, index) => (
              <td key={index} className="model-cell">
                <div className="model-info">
                  <img src={model.image} alt={model.name} />
                  <h3>{model.name}</h3>
                  <p><strong>Author:</strong> {model.author}</p>
                  <p><strong>Description:</strong> {model.description}</p>
                  <p><strong>Downloads:</strong> {model.downloads}</p>
                  <button>Download</button>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            {models.slice(2, 4).map((model, index) => (
              <td key={index} className="model-cell">
                <div className="model-info">
                  <img src={model.image} alt={model.name} />
                  <h3>{model.name}</h3>
                  <p><strong>Author:</strong> {model.author}</p>
                  <p><strong>Description:</strong> {model.description}</p>
                  <p><strong>Downloads:</strong> {model.downloads}</p>
                  <button>Download</button>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ModelList;