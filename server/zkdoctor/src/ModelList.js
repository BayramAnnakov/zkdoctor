import React from 'react';
import { useState } from 'react';

import './ModelList.css';



const models = [
    {id:1, name: 'Breast Cancer', description: 'Detect early signs of breast cancer', downloads: 312, model_path: '', image: 'breast.jpg', author: 'National Cancer Institute'},
    {id:2, name: 'Diabetes', description: 'Check if you have a diabetes', downloads: 428, model_path: '', image: 'diabetes.jpg', author: 'National Institute of Diabetes and Digestive and Kidney Diseases'},
    {id:3, name: 'Heart Disease', description: 'Analyze risks of heart disease', downloads: 10092, model_path: '', image: 'heart.jpg', author: 'National Heart, Lung, and Blood Institute'},
    {id:4, name: 'Skin Cancer', description: 'Spot skin cancer (melanoma) early', downloads: 187371, model_path: '', image: 'skin.jpg', author: 'National Cancer Institute'},
  // add more models here
];

function ModelList() {
    const [activeSubsection, setActiveSubsection] = useState(null);
    const [verificationStatus, setVerificationStatus] = useState(null);

    const handleDownload = (id) => {
        setActiveSubsection(id);
        setVerificationStatus(null);
        // Trigger file download here. This is a placeholder.
        console.log(`Downloading model ${id}`);
    };

    const handleSubmit = () => {
        const isVerified = true;
        setVerificationStatus(isVerified ? 'Proof Verified' : 'Proof Not Verified');
    };
  return (
    <div className="model-list">
      <h2>Available Diagnostic Models</h2>
      <table>
        <tbody>
          <tr>
            {models.slice(0, 2).map((model) => (
              <td key={model.id} className="model-cell">
                <div className="model-info">
                  <img src={model.image} alt={model.name} />
                  <h3>{model.name}</h3>
                  <p><strong>Author:</strong> {model.author}</p>
                  <p><strong>Description:</strong> {model.description}</p>
                  <p><strong>Downloads:</strong> {model.downloads}</p>
                  <button onClick={() => handleDownload(model.id)}>Download</button>
                  {activeSubsection === model.id && (
                    <div className="model-subsection">
                      <h4>Enter Model Output and Proof</h4>
                      <input type="text" placeholder="Model Output" />
                      <input type="text" placeholder="Proof" />
                      <button onClick={handleSubmit}>Submit</button>
                      {verificationStatus && <div className="verification-status">{verificationStatus}</div>}
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
          <tr>
            {models.slice(2, 4).map((model) => (
              <td key={model.id} className="model-cell">
                <div className="model-info">
                  <img src={model.image} alt={model.name} />
                  <h3>{model.name}</h3>
                  <p><strong>Author:</strong> {model.author}</p>
                  <p><strong>Description:</strong> {model.description}</p>
                  <p><strong>Downloads:</strong> {model.downloads}</p>
                  <button onClick={() => handleDownload(model.id)}>Download</button>
                  {activeSubsection === model.id && (
                    <div className="model-subsection">
                      <h4>Enter Model Output and Proof</h4>
                      <input type="text" placeholder="Model Output" />
                      <input type="text" placeholder="Proof" />
                      <button onClick={handleSubmit}>Submit</button>
                      {verificationStatus && <div className="verification-status">{verificationStatus}</div>}
                    </div>
                  )}
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