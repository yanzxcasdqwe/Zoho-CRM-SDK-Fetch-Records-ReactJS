import { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import {useState} from 'react';

declare let ZOHO: any; 
function App() {
  const [val, setVal] = useState<any[]>([]);
  useEffect(() => {
    setTimeout(() => {
      // add a delay before using the REST API
      ZOHO.CRM.API.getAllRecords({Entity:"Leads",sort_order:"asc",per_page:10,page:1})
      .then(function(data: any) {
        console.log(data.data)
        setVal(data.data);       
      })
    }, 500);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                  <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                    <thead>
                      <tr>
                        <th scope="col" className='px-6 py-3 text-left text-base font-medium text-gray-500 uppercase'>Name</th>
                        <th scope="col" className='px-6 py-3 text-left text-base font-medium text-gray-500 uppercase'>Company</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {val.map((value, index) => {
                      return (
                        <tr>
                          <td className='px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200' key={index}>{value.Full_Name}</td>
                          <td className='px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200' key={index}>{value.Company}</td>
                        </tr>
                      )
                    })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default App;
