import React from 'react'

export default function Alert(props) {
  const capatalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    props.alert &&
    <div className={ `alert alert-${ props.alert.type } alert-dismissible fade show` } role="alert">
        <strong>{ capatalized(props.alert.type) }!</strong> { props.alert.message }
    </div>
  );
};
