import TextView from "./TextView";
import Icon from "./Icon";
export default function TextIcon({ text, icon, props }) {
  const xicon = <Icon icon={icon} className={props.iconClasses} />;
  return (
    <div className={`${props.className} flex items-center`}>
      {props.iconPrev && xicon}
      <TextView text={text} className={props.textClasses} />
      {!props.iconPrev && xicon}
    </div>
  );
}
