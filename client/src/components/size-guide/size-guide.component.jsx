// components/size-guide/size-guide.component.jsx
import { useState } from 'react';
import {
  SizeGuideContainer,
  SizeGuideModal,
  SizeGuideButton,
  CloseButton,
  SizeTable,
} from './size-guide.styles';

const SizeGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SizeGuideContainer>
      <SizeGuideButton onClick={() => setIsOpen(true)}>
        Size Guide
      </SizeGuideButton>

      {isOpen && (
        <SizeGuideModal>
          <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          <h2>Size Guide</h2>
          <SizeTable>
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (in)</th>
                <th>Waist (in)</th>
                <th>Hip (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XS</td>
                <td>32-34</td>
                <td>26-28</td>
                <td>34-36</td>
              </tr>
              {/* Add more sizes */}
            </tbody>
          </SizeTable>
        </SizeGuideModal>
      )}
    </SizeGuideContainer>
  );
};

export default SizeGuide;
