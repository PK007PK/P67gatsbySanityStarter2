import React, { useContext } from 'react';
import AppContext from 'src/AppProvider';
import { SelectGroupStyle, StyledButton } from './SelectGroup.style';

const SelectGroup = ({ title, style }) => {
    const { group, setGroup } = useContext(AppContext);

    return (
        <SelectGroupStyle style={style}>
            <h2 className="title">{title}</h2>
            <div className="buttonsWrapper">
                <StyledButton
                    selected={group === 'gminy'}
                    onClick={() => setGroup('gminy')}
                    className="button"
                    type="button"
                >
                    Dla gmin
                </StyledButton>
                <StyledButton
                    selected={group === 'mieszkańcy'}
                    onClick={() => setGroup('mieszkańcy')}
                    className="button"
                    type="button"
                >
                    Dla obywateli
                </StyledButton>
            </div>
        </SelectGroupStyle>
    );
};

export default SelectGroup;
