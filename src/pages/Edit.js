import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id :", id);

  const mode = searchParams.get("mode");
  console.log("mode: ", mode);

  const navigate = useNavigate();
  return (
    <div>
      <h1>Edit</h1>
      <p>이 곳은 편집 페이지입니다. </p>
      <button onClick={() => setSearchParams({ who: "Loi" })}>Qs바꾸기</button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 가기
      </button>
    </div>
  );
};

export default Edit;
