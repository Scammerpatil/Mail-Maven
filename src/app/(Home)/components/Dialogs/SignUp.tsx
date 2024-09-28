import { Eye, EyeOff, X } from "lucide-react";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  useEffect(() => {
    if (
      form.userName &&
      form.fullName &&
      form.email &&
      form.password.length > 8
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [form]);

  const handleVerifyEmail = () => {
    // Verify email
  };

  const handleSubmit = () => {
    // Handle submit
  };

  return (
    <dialog id="signup" className="modal">
      <div className="modal-box max-w-none">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 text-3xl border-base-content">
            <X />
          </button>
        </form>
        <div className="flex items-center justify-center py-5 w-full">
          <div className="card bg-base-300 shadow-xl p-10 w-full lg:w-1/2">
            <div className="flex items-center justify-center mb-8">
              <svg
                width={35}
                height={29}
                version="1.1"
                viewBox="0 0 30 23"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    id="Artboard"
                    transform="translate(-95.000000, -51.000000)"
                  >
                    <g id="logo" transform="translate(95.000000, 50.000000)">
                      <path
                        id="Combined-Shape"
                        fill="currentColor"
                        d="M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <h2 className="ml-3 text-2xl font-bold uppercase">Mail Maven</h2>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Adventure starts here 🚀
              </h3>
              <p className="text-sm">Make your app management easy and fun!</p>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full"
                  value={form.userName}
                  onChange={(e) =>
                    setForm({ ...form, userName: e.target.value })
                  }
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
              </div>
              <div className="flex gap-2 mb-4">
                <div className="form-control flex-grow">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <button
                  className="btn btn-primary h-14"
                  type="button"
                  onClick={handleVerifyEmail}
                  disabled={
                    !form.email.includes("@") ||
                    !form.email.includes(".") ||
                    !form.email.includes("com")
                  }
                >
                  Verify
                </button>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={form.showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`input input-bordered w-full ${
                      form.password.length > 8 ? "input-success" : "input-error"
                    }`}
                    value={form.password}
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value });
                    }}
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => {
                      setForm({ ...form, showPassword: !form.showPassword });
                    }}
                  >
                    {form.showPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </div>
              <div className="form-control mb-4">
                <label className="cursor-pointer label">
                  <span className="label-text">
                    I agree to privacy policy & terms
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>
              <button
                className="btn btn-primary w-full"
                type="submit"
                onClick={handleSubmit}
                disabled={
                  !form.userName ||
                  !form.email ||
                  !form.fullName ||
                  !form.password ||
                  submitDisabled ||
                  form.password.length <= 8
                }
              >
                Sign up
              </button>
              <div className="text-center mt-4">
                <p className="text-sm">Already have an account?</p>
                <a href="../Login" className="link link-primary">
                  Sign in instead
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default SignUp;
