import React from 'react';
import ListDesign from '../../helpers/ListDesign';
import DataTable from '@/helpers/DataTable';
import Siderbar from '../../helpers/siderbar';
import axios from 'axios';

const ItemList = ({tableData}) => {
    console.log(tableData)
    return (
        <div>
            <Siderbar />
            <DataTable
                head={[
                    "Supplier Name",
                    "Supplier Group",
                    "Status",
                    "ID",
                    "Actions"
                ]}
                title='Items'
            />
        </div>
    );
}

export default ItemList;


export const getServerSideProps = async () => {
   
    try {
      // Make an API request to fetch data
      const response = await axios.get('https://tgc67.online/api/resource/Item', {
        headers: {
          Cookie: 'full_name=Administrator; sid=0518bcdd7a22089a12b7681f3bfebbc590c10806c27a5fcd62cb8855; system_user=yes; user_id=Administrator; user_image=',
        },
      });
  
      // Assuming your API returns an array of data, you can extract it like this
      const tableData = response.data;
  
      return {
        props: {
            tableData,
        },
      };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        props: {
            tableData: [], // Return an empty array or an appropriate default value in case of an error
        },
      };
    }
  };