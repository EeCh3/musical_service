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

function FilterOptions() {
    return (
        <div>
            <ul className="filter__options">
                <li><a className="dropdown-item" href="http://">Option 1</a></li>
                <li><a className="dropdown-item" href="http://">Option 2</a></li>
                <li><a className="dropdown-item" href="http://">Option 3</a></li>
            </ul>
        </div>
    );
  };

export default FilterOptions;


