import { Table, List } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import District1_Estimate from '../estimate/District1_Estimate.json';
import District2_Estimate from '../estimate/District2_Estimate.json';
import District3_Estimate from '../estimate/District3_Estimate.json';
import District4_Estimate from '../estimate/District4_Estimate.json';
import District5_Estimate from '../estimate/District5_Estimate.json';
import District6_Estimate from '../estimate/District6_Estimate.json';
import District7_Estimate from '../estimate/District7_Estimate.json';
import District8_Estimate from '../estimate/District8_Estimate.json';
import District9_Estimate from '../estimate/District9_Estimate.json';
import District10_Estimate from '../estimate/District10_Estimate.json';
import District11_Estimate from '../estimate/District11_Estimate.json';
import District12_Estimate from '../estimate/District12_Estimate.json';
import DistrictBinhChanh_Estimate from '../estimate/DistrictBinhChanh_Estimate.json';
import DistrictBinhThanh_Estimate from '../estimate/DistrictBinhThanh_Estimate.json';
import DistrictBinhTan_Estimate from '../estimate/DistrictBinhTan_Estimate.json';
import DistrictCanGio_Estimate from '../estimate/DistrictCanGio_Estimate.json';
import DistrictCuChi_Estimate from '../estimate/DistrictCuChi_Estimate.json';
import DistrictGoVap_Estimate from '../estimate/DistrictGoVap_Estimate.json';
import DistrictHoocMon_Estimate from '../estimate/DistrictHoocMon_Estimate.json';
import DistrictNhaBe_Estimate from '../estimate/DistrictNhaBe_Estimate.json';
import DistrictPhuNhuan_Estimate from '../estimate/DistrictPhuNhuan_Estimate.json';
import DistrictTanBinh_Estimate from '../estimate/DistrictTanBinh_Estimate.json';
import DistrictTanPhu_Estimate from '../estimate/DistrictTanPhu_Estimate.json';
import DistrictThuDuc_Estimate from '../estimate/DistrictThuDuc_Estimate.json';
import axios from 'axios';
const { Search } = Input;
const columns = [
  {
    title: '',
    dataIndex: 'Type Property',
  },
  {
    title: 'Giá',
    dataIndex: 'Value Property',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const district = [
  { name: 'Quận 1', data: District1_Estimate },
  { name: 'Quận 2', data: District2_Estimate },
  { name: 'Quận 3', data: District3_Estimate },
  { name: 'Quận 4', data: District4_Estimate },
  { name: 'Quận 5', data: District5_Estimate },
  { name: 'Quận 6', data: District6_Estimate },
  { name: 'Quận 7', data: District7_Estimate },
  { name: 'Quận 8', data: District8_Estimate },
  { name: 'Quận 9', data: District9_Estimate },
  { name: 'Quận 10', data: District10_Estimate },
  { name: 'Quận 11', data: District11_Estimate },
  { name: 'Quận 12', data: District12_Estimate },
  { name: 'Quận Bình Tân', data: DistrictBinhTan_Estimate },
  { name: 'Quận Bình Thạnh', data: DistrictBinhThanh_Estimate },
  { name: 'Quận Gò Vấp', data: DistrictGoVap_Estimate },
  { name: 'Quận Phú Nhuận', data: DistrictPhuNhuan_Estimate },
  { name: 'Quận Tân Bình', data: DistrictTanBinh_Estimate },
  { name: 'Quận Tân Phú', data: DistrictTanPhu_Estimate },
  { name: 'Quận Thủ Đức', data: DistrictThuDuc_Estimate },
  { name: 'Huyện Bình Chánh', data: DistrictBinhChanh_Estimate },
  { name: 'Huyện Cần Giờ', data: DistrictCanGio_Estimate },
  { name: 'Huyện Củ Chi', data: DistrictCuChi_Estimate },
  { name: 'Huyện Hóc Môn', data: DistrictHoocMon_Estimate },
  { name: 'Huyện Nhà Bè', data: DistrictNhaBe_Estimate },
];

const Price = () => {
  const [data, setData] = useState(District1_Estimate);
  const [name, setName] = useState('Quận 1');
  const onClick = (e) => {
    setData(e.data);
    setName(e.name);
  };
  return (
    <div
      style={{
        padding: 100,
        flexDirection: 'row',
        display: 'flex',
      }}
    >
      <div style={{ flex: 7 }}>
        <h1 style={{ fontFamily: 'sans-serif' }}>
          Tham khảo giá nhà đất quận {name}
        </h1>

        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
          onChange={onChange}
          style={{ fontFamily: 'sans-serif' }}
        />
      </div>
      <div style={{ flex: 3, marginLeft: 50 }}>
        <List
          style={{ width: 300 }}
          size="small"
          header={
            <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
              Nhà đất tại các khu vực
            </p>
          }
          bordered
          dataSource={district}
          renderItem={(item, id) => (
            <List.Item onClick={() => onClick(item)}>
              <a style={{ fontFamily: 'sans-serif' }}>{item.name}</a>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default Price;
