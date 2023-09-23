import React from 'react';



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
        <thead>
            <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Description</th>
            <th>Downloads</th>
            <th>Download</th>
            </tr>
        </thead>
        <tbody>
            {models.map((model, index) => (
            <tr key={index}>
                <td><img src={model.image} alt={model.name} /></td>
                <td>{model.name}</td>
                <td>{model.author}</td>
                <td>{model.description}</td>
                <td>{model.downloads}</td>
                <td><button>Download</button></td>
            </tr>
            ))}
        </tbody>
        </table>
  </div>
  );
}

export default ModelList;