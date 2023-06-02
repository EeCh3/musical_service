import * as S from "./filterOptions.style";

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


