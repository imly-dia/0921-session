import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.passwordConfirm) {
      window.alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    window.alert("회원가입 완료!");
  };

  const isAllFilled = Object.values(form).every((v) => v.length > 0);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-8">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-80 flex-col gap-2.5"
      >
        <h1 className="title-sm mb-4 text-center text-neutral-500">회원가입</h1>

        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
        />
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
        />
        <Input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요"
        />
        <Input
          name="passwordConfirm"
          type="password"
          value={form.passwordConfirm}
          onChange={handleChange}
          placeholder="비밀번호 입력 확인"
        />

        <Button text="회원가입" type="submit" disabled={!isAllFilled} />
      </form>
    </main>
  );
}