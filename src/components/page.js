import React from 'react';
import './page.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Table } from 'antd';

const Page = ({ page, onChangePage }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
  ];
  return (
    <>
      <div
        className="app-page"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <header className="app-page-header">
          <h5>
            {page.title}

            <i
              className="sc-icon-cross sc-lg app-page-close"
              onClick={() => {
                onChangePage(false);
              }}
            ></i>
          </h5>
        </header>

        <div className="app-page-body">
          <div>
            <ImageGallery items={page.images} thumbnailPosition="left" />
          </div>

          <div>
            <table className="sc-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Rooms</th>
                  <th>Area</th>
                  <th>Rent</th>
                  <th>Deposit</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{page.typeName}</td>
                  <td>{page.rooms}</td>
                  <td>{page.area}</td>
                  <td>{page.rent}</td>
                  <td>{page.deposit}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>{page.description}</p>
        </div>
        <Table style={{ width: 500 }} columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default Page;

// import { Space, Table, Tag } from 'antd';
// import React from 'react';
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
// const Page = () => <Table columns={columns} dataSource={data} />;
// export default Page;
