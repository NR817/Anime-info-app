import React from 'react'

const InputGroup = ({total, name, setId}) => {

    return (
        <div class="input-group mb-3">
  <select onChange={e => setId(e.target.value)} class="form-select" id={name}>
    <option selected>Choose Episode...</option>
    {[...Array(total).keys()].map(el => {
        return (
            <option value={el+1}>{name} - {el+1}</option>

        )
    })}

  </select>
</div>
    )
}

export default InputGroup
