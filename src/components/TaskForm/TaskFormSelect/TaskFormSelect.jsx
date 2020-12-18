import './TaskFormSelect.css'

const TaskFormSelect = ({name, label, optionList, selectOption}) => {

  // console.log('optionlist - '+optionList)

  return (
    <select className='select' name={name} label={label} onChange={selectOption}>
      {optionList.map((item, num) => {
        return (
          <option key={num} className='select__option' value={num}>{item}</option>
        )
      })}
    </select>
  )
}

export default TaskFormSelect;