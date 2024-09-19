"use client"
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/context/AuthContext";
// import Loading from "@/ui/Loading";

// export const metadata = {
//     title: "ثبت نام"
// }

const schema = yup.object({
    name: yup.string().min(5, "نام و نام خانوادگی نامعتبر است").max(30).required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است")
})

function SignUp() {
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    })

    const { signin } = useAuth()

    const onSubmit = async (values) => {
        await signin(values)
    }

    return <div>
        <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">ثبت نام</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <RHFTextField
                label="نام و نام خانوادگی"
                name="name"
                register={register}
                isRequired
                errors={errors}
            />

            <RHFTextField
                label="ایمیل"
                name="email"
                register={register}
                dir="ltr"
                isRequired
                errors={errors}
            />

            <RHFTextField
                label="رمز عبور"
                name="password"
                dir="ltr"
                type="password"
                register={register}
                isRequired
                errors={errors}
            />
            {isLoading ? "loading":
                <Button type="submit" variant="primary" className="w-full">
                    تایید
                </Button>
            }
        </form>
    </div>
}

export default SignUp