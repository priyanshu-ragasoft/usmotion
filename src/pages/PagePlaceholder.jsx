import ComingSoon from "../components/common/ComingSoon";

export default function PagePlaceholder({ title, description, showProjectLink = true }) {
  return (
    <ComingSoon title={title} description={description} showProjectLink={showProjectLink} />
  );
}
