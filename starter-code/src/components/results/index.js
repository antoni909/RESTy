
const Results = (props) => {

  return (
    <section>
      <pre>
        {props.data? JSON.stringify(props.data.results, undefined, 2):null}
      </pre>
    </section>
  )

}

export default Results;
