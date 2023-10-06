

//  const singUp=async (req,res)=>{
//   try{
//    const { 
//     username,
//     name,
//     apellidop,
//     apellidom,
//     birthday,
//     number,
//     password,
//     gender,
//     email}=req.body
//     console.log(username)
//    let user=await User.findOne({username}) || null
//    const usertwo=await User.find({email}) || null
//    if(user||usertwo){
//       return res.json({
//         success:false,
//         msg:"El usuario ya existe"
//       })
//    }
//    const code=uuidv4()
//    user =new User({

//     username,
//     name,
//     apellidop,
//     apellidom,
//     birthday,
//     number,
//     password,
//     gender,
//     email,
//     code})
//     const token=getToken({username,code})
//     const template= getTemplate(name,token)
//     await sendEmail(email,'Confirmar incio de sesion',template)
//     await user.save()
//   return   res.json({
//         success:true,
//         msg:"se ha registrado correctamente"
//     })
//   }catch(error){
//     console.log(err);
//    return res.json({
//     success:false,
//     msg:"Error al registratr usuario"
//    })
//   }
// }
// module.export={
//  singUp
// }

const User = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');
const { getToken, getTokenData } = require('../config/jwt.config');
const { getTemplate, sendEmail } = require('../config/mail.config');
const { connection } = require('../config/db.config');



const signUp = async (req, res) => {
    
//     try {
        
//         Obtener la data del usuario: name, email
//         const {  username,
//               name,
//               apellidop,
//               apellidom,
//               birthday,
//               number,
//               password,
//               gender,
//               email } = req.body;
      

//         let user=await User.findOne({email}) || null
//      if(user){
//       return res.json({
//         success:false,
//         msg:"El correro ya existe"
//       })
//      }
   
//    const code=uuidv4()
//    user =new User({

//     username,
//     name,
//     apellidop,
//     apellidom,
//     birthday,
//     number,
//     password,
//     gender,
//     email,
//     code})
//     const token= await getToken({username,email,code})
//     console.log(token)
//     const template= getTemplate(name,token)
//     await sendEmail(email,'Confirmar incio de sesion',template)
//     await user.save()
        
//         Verificar que el usuario no exista
//         let user = await User.findOne({ email }) || null;

//         if(user !== null) {
//             return res.json({
//                 success: false,
//                 msg: 'Usuario ya existe'
//             });
//         }

//         // Generar el código
//         const code = uuidv4();

//         // Crear un nuevo usuario
//         user = new User({ name, email, code });

//         // Generar token
//         const token = getToken({ email, code });

//         // Obtener un template
//         const template = getTemplate(name, token);

//         // Enviar el email
//         await sendEmail(email, 'Este es un email de prueba', template);
//         await user.save();

//       return  res.json({
//             success: true,
//             msg: [
//               name,email
//             ]
//         });

//     } catch (error) {
//         console.log(error);
//         return res.json({
//             success: false,
//             msg: 'Error al registrar usuario'
//         });
//     }
}

const confirm = async (req, res) => {
    // try {

    //    Obtener el token
    //    const { token } = req.params;
       
    //    Verificar la data
    //    const data = await getTokenData(token);

    //    if(data === null) {
    //         return res.json({
    //             success: false,
    //             msg: 'Error al obtener data'
    //         });
    //    }

    //    console.log(data);

    //    const { username,email,code } = data.data;

    //    Verificar existencia del usuario
    //    const user = await User.findOne({ email }) || null;
      
    //    if(user===null ) {
    //         return res.json({
    //             success: false,
    //             msg: 'Usuario no existe'
    //         });
    //    }

    //    Verificar el código
    //    if(code !== user.code) {
    //         return res.redirect('/error.html');
    //    }

    //    Actualizar usuario
    //    user.status = 'VERIFIED';
    //    await user.save();
    //    const dataofclient=[user.username,user.name,user.apellidop,user.apellidom,user.birthday,user.number,user.password,user.gender]
    //    connection.query(`INSERT INTO  user(username,name,apellidop,apellidom,birthday,telphonenumber,password,gender) 
    //    values(?,?,?,?,?,?,?,?);`,dataofclient,(err,result)=>{
    //         if(err)throw err
    //         console.log(result)
    //    })
    //    const datemail=[user.username,user.email]
    //    connection.query(`
    //     INSERT INTO email(username,email) values(?,?)
    //    `,datemail,(err,result)=>{
    //     if(err) throw err
    //     console.log(result)
    //    })
    //    Redireccionar a la confirmación
    //    return res.redirect('https://www.primevideo.com/region/na/settings?ref_=atv_auth_red_aft');
        
    // } catch (error) {
    //     console.log(error);
    //     return res.json({
    //         success: false,
    //         msg: 'Error al confirmar usuario'
    //     });
    // }
}


module.exports = {
    signUp,
    confirm
}