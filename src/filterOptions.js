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
import styled from "styled-components";

const Options = styled.ul`
    position: absolute;
    z-index: 2;
    z-index:2;
    background-color: #313131;
    width: 248px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34px;
    gap: 10px;

    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #B672FF;
`;

const DropdownItem = styled.a`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    text-decoration-line: underline;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #B672FF;
`;

function FilterOptions() {
    return (
        <div>
            <Options>
                <li><DropdownItem>Option 1</DropdownItem></li>
                <li><DropdownItem>Option 2</DropdownItem></li>
                <li><DropdownItem>Option 3</DropdownItem></li>
            </Options>
        </div>
    );
  };

export default FilterOptions;


