import React, { FC, useState, KeyboardEvent } from 'react';
import CatImage from 'Images/cat.png';
import getClassList from 'Utilities/getClassList';
import { FoodCardProps } from './types';

const FoodCard: FC<FoodCardProps> = ({
  selected: initialSelected = false,
  disabled = false,
  name = '',
  filling = '',
  features = [],
  weightValue = '0',
  weightUnit = 'кг',
  slogan: initialSlogan = '',
  deselectSlogan = '',
  footerText = '',
}) => {
  const [slogan, setSlogan] = useState(initialSlogan);
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(!disabled ? initialSelected : false);

  const selectAction = (): void => {
    setSlogan(initialSlogan);
    setSelected(!selected);
    setHovered(false);
  };

  const clickHandler = (): void => {
    if (!disabled) selectAction();
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (!disabled && e.key === 'Enter') selectAction();
  };

  const focusHandler = (): void => {
    if (!disabled) {
      if (selected) setSlogan(deselectSlogan);
      setHovered(true);
    }
  };

  const blurHandler = (): void => {
    if (!disabled) {
      setSlogan(initialSlogan);
      setHovered(false);
    }
  };

  const mods: string[] = [];
  if (hovered) mods.push('hovered');
  if (selected) mods.push('selected');
  if (disabled) mods.push('disabled');
  const classList = getClassList('food', mods);

  const renderFooterContent = (): JSX.Element => {
    if (disabled) {
      return (
        <span className="food__footer-text">{`Печалька, ${filling} закончился.`}</span>
      );
    }

    if (selected) {
      return (
        <span className="food__footer-text">{footerText}</span>
      );
    }

    return (
      <>
        <span className="food__footer-text">
          Чего сидишь? Порадуй котэ,&nbsp;
        </span>
        <button
          className="food__footer-button"
          type="button"
          onClick={clickHandler}
        >
          <span>купи</span>
          .
        </button>
      </>
    );
  };

  return (
    <div className={classList}>
      <div
        className="food__wrapper"
        role="checkbox"
        aria-checked={selected}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onMouseEnter={focusHandler}
        onMouseLeave={blurHandler}
        onClick={clickHandler}
        onKeyDown={keyDownHandler}
      >
        <div className="food__top">
          <p className="food__slogan">{slogan}</p>
        </div>
        <div className="food__content">
          <h2 className="food__name">{name}</h2>
          <b className="food__filling">{filling}</b>
          <ul className="food__contents-list">
            {features.map(({ numberValue, text }, index) => (
              <li
                key={index}
                className="food__contents-item"
              >
                {numberValue && (
                  <>
                    <b>{numberValue}</b>
                    &nbsp;
                  </>
                )}
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <img
            src={CatImage}
            alt="Изображение кота на корме"
            className="food__image"
          />
          <div className="food__weight">
            <span className="food__weight-value">{weightValue}</span>
            <span className="food__weight-unit">{weightUnit}</span>
          </div>
        </div>
      </div>
      <div className="food__footer">
        {renderFooterContent()}
      </div>
    </div>
  );
};

export default FoodCard;
