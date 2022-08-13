import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Heading from '../../Components/Heading/Heading'
import './services.scss'
export default function Service() {
    return (
      <>
      <NavBar />
       <div className="container-fluid service-container  position-relative p-0 ">
           <div className="bg-clip"></div>
           <div className="bg-clip"></div>
           <Heading heading="Our Services " />
            <div className="card m">
                <div className="card-heading" id="petrol">
                    <Heading heading="Petrol" />
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et quam lacus. Nunc orci ex, pharetra vitae aliquam sed, volutpat in magna. Mauris euismod nisl lectus, sed accumsan tellus fermentum vel. Integer consectetur mattis tortor consectetur porta. Nulla facilisi.
                        </p>
                        <p>Fusce finibus velit a nulla rutrum, at auctor lorem tempor. Quisque sit amet justo lacus. Mauris rutrum nisi sed congue pellentesque. Nulla vestibulum metus at lectus iaculis, eget consequat ipsum hendrerit. Donec suscipit lectus nec interdum efficitur.
                        Nullam ac euismod enim, eget convallis leo.</p>
                        <p>Sed suscipit, purus sed euismod faucibus, odio diam ullamcorper lectus, nec suscipit tortor arcu tempor arcu. Fusce mollis felis et feugiat blandit. Fusce nibh tellus, tempor ut dictum sit amet, ullamcorper et magna. Pellentesque vitae dui vitae ante tempus eleifend ac quis lacus. Maecenas sit amet mauris in eros sollicitudin viverra nec id odio. Sed ac mi faucibus, pellentesque dolor sed, fringilla orci. Suspendisse ante velit, imperdiet id sollicitudin sed, efficitur vitae quam. Mauris gravida, nisl ut accumsan fermentum, mi diam faucibus lectus, vitae tempor leo arcu ac justo. Donec finibus magna arcu, vitae viverra arcu placerat quis. Aenean cursus odio lectus, nec tempor ex mattis id. Proin semper, est at finibus viverra, diam ipsum fermentum sapien, nec vulputate metus nisi sit amet leo. Nunc cursus auctor metus. Mauris dui metus, sollicitudin ut efficitur et, tristique et mi. Phasellus commodo urna ac tellus tincidunt sodales.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card ">
                <div className="card-heading" id="diesel">
                    <Heading heading="Diesel" />
                    
                </div>
                <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et quam lacus. Nunc orci ex, pharetra vitae aliquam sed, volutpat in magna. Mauris euismod nisl lectus, sed accumsan tellus fermentum vel. Integer consectetur mattis tortor consectetur porta. Nulla facilisi.
                        </p>
                        <p>Fusce finibus velit a nulla rutrum, at auctor lorem tempor. Quisque sit amet justo lacus. Mauris rutrum nisi sed congue pellentesque. Nulla vestibulum metus at lectus iaculis, eget consequat ipsum hendrerit. Donec suscipit lectus nec interdum efficitur.
                        Nullam ac euismod enim, eget convallis leo.</p>
                        <p>Sed suscipit, purus sed euismod faucibus, odio diam ullamcorper lectus, nec suscipit tortor arcu tempor arcu. Fusce mollis felis et feugiat blandit. Fusce nibh tellus, tempor ut dictum sit amet, ullamcorper et magna. Pellentesque vitae dui vitae ante tempus eleifend ac quis lacus. Maecenas sit amet mauris in eros sollicitudin viverra nec id odio. Sed ac mi faucibus, pellentesque dolor sed, fringilla orci. Suspendisse ante velit, imperdiet id sollicitudin sed, efficitur vitae quam. Mauris gravida, nisl ut accumsan fermentum, mi diam faucibus lectus, vitae tempor leo arcu ac justo. Donec finibus magna arcu, vitae viverra arcu placerat quis. Aenean cursus odio lectus, nec tempor ex mattis id. Proin semper, est at finibus viverra, diam ipsum fermentum sapien, nec vulputate metus nisi sit amet leo. Nunc cursus auctor metus. Mauris dui metus, sollicitudin ut efficitur et, tristique et mi. Phasellus commodo urna ac tellus tincidunt sodales.
                        </p>
                    </div>
            </div>
            <div className="card">
                <div className="card-heading" id="lubes">
                    <Heading heading="Lubes" />
                </div>
                <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et quam lacus. Nunc orci ex, pharetra vitae aliquam sed, volutpat in magna. Mauris euismod nisl lectus, sed accumsan tellus fermentum vel. Integer consectetur mattis tortor consectetur porta. Nulla facilisi.
                        </p>
                        <p>Fusce finibus velit a nulla rutrum, at auctor lorem tempor. Quisque sit amet justo lacus. Mauris rutrum nisi sed congue pellentesque. Nulla vestibulum metus at lectus iaculis, eget consequat ipsum hendrerit. Donec suscipit lectus nec interdum efficitur.
                        Nullam ac euismod enim, eget convallis leo.</p>
                        <p>Sed suscipit, purus sed euismod faucibus, odio diam ullamcorper lectus, nec suscipit tortor arcu tempor arcu. Fusce mollis felis et feugiat blandit. Fusce nibh tellus, tempor ut dictum sit amet, ullamcorper et magna. Pellentesque vitae dui vitae ante tempus eleifend ac quis lacus. Maecenas sit amet mauris in eros sollicitudin viverra nec id odio. Sed ac mi faucibus, pellentesque dolor sed, fringilla orci. Suspendisse ante velit, imperdiet id sollicitudin sed, efficitur vitae quam. Mauris gravida, nisl ut accumsan fermentum, mi diam faucibus lectus, vitae tempor leo arcu ac justo. Donec finibus magna arcu, vitae viverra arcu placerat quis. Aenean cursus odio lectus, nec tempor ex mattis id. Proin semper, est at finibus viverra, diam ipsum fermentum sapien, nec vulputate metus nisi sit amet leo. Nunc cursus auctor metus. Mauris dui metus, sollicitudin ut efficitur et, tristique et mi. Phasellus commodo urna ac tellus tincidunt sodales.
                        </p>
                    </div>
            </div>
        </div> 
      <Footer />
      </>
    )
}
