import React from 'react';
import { useState } from 'react';

import './ModelList.css';



const models = [
    {id:1, name: 'Breast Cancer', description: 'Detect early signs of breast cancer', downloads: 312, model_path: 'breast.pth', image: 'breast.jpg', author: 'National Cancer Institute'},
    {id:2, name: 'Diabetes', description: 'Check if you have a diabetes', downloads: 428, model_path: 'diabetes.pth', image: 'diabetes.jpg', author: 'National Institute of Diabetes and Digestive and Kidney Diseases'},
    {id:3, name: 'Heart Disease', description: 'Analyze risks of heart disease', downloads: 10092, model_path: 'heart.pth', image: 'heart.jpg', author: 'National Heart, Lung, and Blood Institute'},
    {id:4, name: 'Skin Cancer', description: 'Spot skin cancer (melanoma) early', downloads: 187371, model_path: 'skin.pth', image: 'skin.jpg', author: 'National Cancer Institute'},
  // add more models here
];

function ModelList() {
    const [activeSubsection, setActiveSubsection] = useState(null);
    const [verificationStatus, setVerificationStatus] = useState(null);

    const handleDownload = async (id) => {
        setActiveSubsection(id);
        setVerificationStatus(null);
        const model = models.find((m) => m.id === id);

        try{
            const response = await fetch(model.model_path);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href  = url;
            a.download = model.model_path;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (e) {
            console.log(e);
        }

    };

    const handleSubmit = () => {
        const isVerified = true;
        setVerificationStatus(isVerified ? 'Proof Verified' : 'Proof Not Verified');
    };

    const handleCloseSubsection = () => {
        setActiveSubsection(null);
        setVerificationStatus(null);
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
                        <h4>Instructions for Using the Model</h4>
                            <p>
                            To run this diagnostic model, you'll need to download it and run it locally on your machine.
                            Upload an image to the model, and it will produce an output and proof.
                            Copy those values into the text fields below for verification.
                            </p>
                      <h4>Enter Model Output and Proof</h4>
                      <input type="text" placeholder="Model Output" />
                      <input type="text" placeholder="Proof" />
                      <button onClick={handleSubmit}>Submit</button>
                      <button onClick={handleCloseSubsection}>Cancel</button>
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
                            <h4>Instructions for Using the Model</h4>
                            <p>
                            To run this diagnostic model, you'll need to download it and run it locally on your machine.
                            Upload an image to the model, and it will produce an output and proof.
                            Copy those values into the text fields below for verification.
                            </p>
                      <h4>Enter Model Output and Proof</h4>
                      <input type="text" placeholder="Model Output" />
                      <input type="text" placeholder="Proof" />
                      <button onClick={handleSubmit}>Submit</button>
                      <button onClick={handleCloseSubsection}>Cancel</button>
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