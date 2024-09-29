// components/Loading.js
const Loading = () => {
    return (
      <div className="loading-overlay">
        <p>Loading...</p>
        <style jsx>{`
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
        `}</style>
      </div>
    );
  };
  
  export default Loading;
  