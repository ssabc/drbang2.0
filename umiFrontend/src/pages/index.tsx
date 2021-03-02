import BasicLayout from '../layouts/BasicLayout'

export default function IndexPage(props) {
  console.log(props.children.props)
  return (
    <BasicLayout props={props.children.props}></BasicLayout>
  );
}