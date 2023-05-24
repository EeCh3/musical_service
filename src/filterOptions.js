// function FilterOptions() {
//     return (
//         <div>
//             <select className="filter__options">
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//                 <option value="option3">Option 3</option>
//             </select>
//         </div>
//     );
//   };

// export default FilterOptions;
// import styled from "styled-components";

// const Options = styled.ul`
//     position: absolute;
//     z-index: 2;
//     z-index:2;
//     background-color: #313131;
//     width: 248px;
//     border-radius: 12px;

//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 34px;
//     gap: 10px;

//     font-weight: 400;
//     font-size: 20px;
//     line-height: 24px;
//     text-decoration-line: underline;
//     color: #B672FF;
// `;

// const DropdownItem = styled.a`
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 24px;

//     text-decoration-line: underline;
//     font-feature-settings: 'pnum' on, 'lnum' on;

//     color: #B672FF;
// `;

import * as S from "./styles";

function FilterOptions() {
    return (
        <div>
            <S.Options>
                <li><S.DropdownItem>Option 1</S.DropdownItem></li>
                <li><S.DropdownItem>Option 2</S.DropdownItem></li>
                <li><S.DropdownItem>Option 3</S.DropdownItem></li>
            </S.Options>
        </div>
    );
  };

export default FilterOptions;


