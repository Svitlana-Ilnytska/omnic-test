import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFetchCellsQuery } from "../../redux/cells/operations"

import BoxItem from "../../components/BoxItem/BoxItem";
import Button from "../../components/Button/Button";
import dataCells from "../../database/dataCells.json";
import css from './CellSizes.module.scss'

import { useParams } from 'react-router-dom';

export default function CellSizes({maxSize}) {
    const dispatch = useDispatch(); 
    const { data, loading, error } = useFetchCellsQuery();
    const cells = useSelector((state) => state.cells);
    const cellTypes = data?.data?.cell_types || [];
    console.log(cellTypes);


    const [mergedData, setMergedData] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);
console.log('maxSize', maxSize)


   useEffect(() => {
    if (data) {
        const mergedData = cellTypes
        .filter((cellType) => cellType.type !== '445.0x405.0x580.0')
        .map((cellType) => {
          const matchingData = dataCells.find((item) => item.id === cellType.type);
          const image = matchingData ? matchingData.image : '';
          const title = matchingData ? matchingData.title : '';
          const size = matchingData ? matchingData.size : '';
  
          return {
            id: cellType.type,
            image: image,
            title: title,
            size: size,
            has_empty: cellType.has_empty,
            params: cellType.params,
          };
        });
  
        setMergedData(mergedData);

        if (cellTypes.some((cellType) => cellType.type === '445.0x405.0x580.0')) {
            console.warn("Warning: Object with id '445.0x405.0x580.0' is missing image, title, and size.");
          }
      }


    }, [data, dispatch]);
console.log('mergedData', mergedData)


const checkMaxSize = (params, has_empty) => {
    const { width, height, depth } = params;
    return width > maxSize.width || height > maxSize.height || depth > maxSize.depth || !has_empty;
  };

  const handleBoxItemClick = (boxItemId) => {
    const selectedItem = mergedData.find(({ id }) => id === boxItemId);
    if (!checkMaxSize(selectedItem.params, selectedItem.has_empty)) {
      setSelectedItemId(boxItemId);
    }
  };

const { uid } = useParams();

console.log('uid sizes', uid)

  return (

    <div className={css.sizesPage}>
    <h2 className={css.title}>Відправлення має бути надійно упаковане</h2>
    <ul className={css.listBlock}>
      {mergedData?.map(({ id, image, title, size, params, has_empty }) => (
        <li key={id}>
          <BoxItem
             image={require(`../../assets/boxSizes/${image}`)}
            title={title}
            size={size}
            disabled={checkMaxSize(params, has_empty)}
            active={selectedItemId === id}
            onClick={() => handleBoxItemClick(id)} 
          />
        </li>
      ))}
    </ul>

    <div className={css.buttonsBlock}>
    <Link to={`/${uid}/packed`}>
        <Button type="button" buttonType="inverted">
          Назад
        </Button>
        </Link>

        <Link to="/#">
        <Button
            type="button"
            buttonType={selectedItemId !== null ? "approved" : "inverted"} 
          >
            Підтвердити
          </Button>
        </Link>
      </div>
    </div>
  );
}
