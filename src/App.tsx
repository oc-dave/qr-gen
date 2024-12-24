import QRCode from 'qrcode';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState<string>('');
  const [qrCode, setQrCode] = useState<string>('');

  const GenerateQrCode = () => {
    if (!url) {
      alert('Please enter a valid URL.');
      return;
    }

    QRCode.toDataURL(
      url,
      { width: 800, margin: 2 }, // Correct way to set width and margin
      (err, url) => {
        if (err) {
          console.error(err);
          return;
        }

        
        setQrCode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button onClick={GenerateQrCode}>Generate</button>
      {qrCode && (
        <>
          <img src={qrCode} alt="QR Code" />
          <a href={qrCode} download="qr_code.png">
            Download QR Code
          </a>
        </>
      )}
      <footer>Made by OC-DAVE</footer>
    </div>
  );
}

export default App;
