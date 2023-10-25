import React from 'react';
import ListDesign from '../../helpers/ListDesign';
import DataTable from '@/helpers/DataTable';
import Siderbar from '../siderbar';

const ItemList = () => {
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
                title='Customer'
            />
        </div>
    );
}

export default ItemList;
