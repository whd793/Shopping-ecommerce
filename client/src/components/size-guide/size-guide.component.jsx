// components/size-guide/size-guide.component.jsx
import { useState } from 'react';
import {
  SizeGuideButton,
  Modal,
  ModalContent,
  CloseButton,
  TableContainer,
  SizeTable,
  TabContainer,
  Tab,
} from './size-guide.styles';
import { X } from 'lucide-react';

const SizeGuide = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inches');

  const sizeCharts = {
    mens: {
      inches: [
        { size: 'S', chest: '36-38', waist: '30-32', hips: '36-38' },
        { size: 'M', chest: '38-40', waist: '32-34', hips: '38-40' },
        { size: 'L', chest: '40-42', waist: '34-36', hips: '40-42' },
        { size: 'XL', chest: '42-44', waist: '36-38', hips: '42-44' },
      ],
      cm: [
        { size: 'S', chest: '91-96', waist: '76-81', hips: '91-96' },
        { size: 'M', chest: '96-102', waist: '81-86', hips: '96-102' },
        { size: 'L', chest: '102-107', waist: '86-91', hips: '102-107' },
        { size: 'XL', chest: '107-112', waist: '91-96', hips: '107-112' },
      ],
    },
    womens: {
      inches: [
        { size: 'XS', chest: '32-34', waist: '24-26', hips: '34-36' },
        { size: 'S', chest: '34-36', waist: '26-28', hips: '36-38' },
        { size: 'M', chest: '36-38', waist: '28-30', hips: '38-40' },
        { size: 'L', chest: '38-40', waist: '30-32', hips: '40-42' },
      ],
      cm: [
        { size: 'XS', chest: '81-86', waist: '61-66', hips: '86-91' },
        { size: 'S', chest: '86-91', waist: '66-71', hips: '91-96' },
        { size: 'M', chest: '91-96', waist: '71-76', hips: '96-102' },
        { size: 'L', chest: '96-102', waist: '76-81', hips: '102-107' },
      ],
    },
  };

  const currentSizeChart =
    sizeCharts[category]?.[activeTab] || sizeCharts.mens[activeTab];

  return (
    <>
      <SizeGuideButton onClick={() => setIsOpen(true)}>
        Size Guide
      </SizeGuideButton>

      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsOpen(false)}>
              <X size={24} />
            </CloseButton>

            <h2>Size Guide</h2>

            <TabContainer>
              <Tab
                active={activeTab === 'inches'}
                onClick={() => setActiveTab('inches')}
              >
                Inches
              </Tab>
              <Tab
                active={activeTab === 'cm'}
                onClick={() => setActiveTab('cm')}
              >
                Centimeters
              </Tab>
            </TabContainer>

            <TableContainer>
              <SizeTable>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest</th>
                    <th>Waist</th>
                    <th>Hips</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSizeChart.map((row, index) => (
                    <tr key={index}>
                      <td>{row.size}</td>
                      <td>{row.chest}</td>
                      <td>{row.waist}</td>
                      <td>{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </SizeTable>
            </TableContainer>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default SizeGuide;
// // components/size-guide/size-guide.component.jsx
// import { useState } from 'react';
// import {
//   SizeGuideContainer,
//   SizeGuideModal,
//   SizeGuideButton,
//   CloseButton,
//   SizeTable,
// } from './size-guide.styles';

// const SizeGuide = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <SizeGuideContainer>
//       <SizeGuideButton onClick={() => setIsOpen(true)}>
//         Size Guide
//       </SizeGuideButton>

//       {isOpen && (
//         <SizeGuideModal>
//           <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
//           <h2>Size Guide</h2>
//           <SizeTable>
//             <thead>
//               <tr>
//                 <th>Size</th>
//                 <th>Chest (in)</th>
//                 <th>Waist (in)</th>
//                 <th>Hip (in)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>XS</td>
//                 <td>32-34</td>
//                 <td>26-28</td>
//                 <td>34-36</td>
//               </tr>
//               {/* Add more sizes */}
//             </tbody>
//           </SizeTable>
//         </SizeGuideModal>
//       )}
//     </SizeGuideContainer>
//   );
// };

// export default SizeGuide;
