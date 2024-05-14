import './App.css';

function App(props) {

  const onChangeTest = (e) => {
    const value = e.target.value;
    props.onTest(value);
  };

  return (
      <div className="App">
        <div className="title">
          <h2>Title ( Test )</h2>
        </div>
        <div className='container'>
          <div className='wrapper'>

            <div className='child'>
              <div className='input-div'>
                <label htmlFor='test' className='input-label'>
                  Test
                </label>
                <input type="text" id='test'
                       value={props.page.test}
                       onChange={onChangeTest}
                />
              </div>
              <button
                  disabled={!props.page.test}
                  onClick={null} className="button">Test
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
