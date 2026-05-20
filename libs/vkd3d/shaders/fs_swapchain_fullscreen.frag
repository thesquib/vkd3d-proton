#version 450

layout(location = 0) out vec4 FragColor;
layout(location = 0) in vec2 vUV;
layout(set = 0, binding = 0) uniform sampler2D Tex;

void main()
{
  // Some D3D12 titles (CryEngine 5.5 / KCD2) write only RGB to the swap chain and
  // leave alpha=0. Apple's WindowServer GPU-fallback compositor reads alpha and the
  // window goes black. Force alpha=1 in the present shader. Engaged via
  // PROTON_VKD3D_FORCE_DRAW_PRESENT=1.
  FragColor = vec4(textureLod(Tex, vUV, 0.0).rgb, 1.0);
}
