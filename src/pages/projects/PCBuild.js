/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import { Link } from "react-router-dom";

class PCBuild extends React.Component {
    render() {
        return (
            <div className="page-content">
                <h2 className="title">2024 Linux PC Build</h2>

                <p>
                    After five years of dual booting both Windows 10 and Linux
                    (Pop!_OS, and then Debian), I decided it was time to come
                    down onto one side of the fence. On one hand I like playing
                    the latest games, so Windows would continue to be an ideal
                    platform. On the other hand, I have been a Linux user for a
                    few years now, and want to try running it as my main
                    operating system. After doing some research, I think I have
                    found the best of both worlds.
                </p>

                <h3>PCI Passthrough</h3>
                <p>
                    PCI passthrough is a technique used to help achieve
                    near-native performance on a virtual machine. The idea is to
                    isolate a graphics card from the host operating system and
                    "pass it" through to a virtual machine as if it were
                    physically installed into it. The Arch Linux Wiki has an
                    excellent{" "}
                    <a href="https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF">
                        article on setting up PCI passthrough
                    </a>{" "}
                    for use with QEMU/KVM virtual machines. A number of YouTube
                    videos were helpful to me in setting up my system. I will
                    link them at the bottom of the page.
                </p>

                <h3>Part 1: The build</h3>
                <p>
                    For my specific setup, I am running Fedora 39 as the host
                    operating system with a Windows 11 virtual machine. The base
                    system has 64GB of DDR5 memory, an Intel i9-13900K
                    processor, an AMD RX 7800 XT GPU allocated to Linux, a
                    NVIDIA RTX 4070 GPU allocated to Windows, and 6TB of NVME
                    solid state storage, split between a 2TB boot drive and a
                    4TB secondary storage drive. See below for a full parts
                    list:
                </p>

                <table class="page-content-table">
                    <thead>
                        <tr>
                            <th>
                                <b>Type</b>
                            </th>
                            <th>
                                <b>Item</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CPU</td>
                            <td>
                                Intel Core i9-13900K 3 GHz 24-Core Processor
                            </td>
                        </tr>
                        <tr>
                            <td>CPU Cooler</td>
                            <td>
                                Cooler Master Hyper 212 (2023) 70.7 CFM CPU
                                Cooler
                            </td>
                        </tr>
                        <tr>
                            <td>Motherboard</td>
                            <td>
                                Asus ROG STRIX Z790-E GAMING WIFI ATX LGA1700
                                Motherboard
                            </td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>
                                Corsair Vengeance 64 GB (2 x 32 GB) DDR5-6400
                                CL32 Memory
                            </td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>
                                Samsung 990 Pro 2 TB M.2-2280 PCIe 4.0 X4 NVME
                                Solid State Drive
                            </td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>
                                Samsung 990 Pro 4 TB M.2-2280 PCIe 4.0 X4 NVME
                                Solid State Drive
                            </td>
                        </tr>
                        <tr>
                            <td>Video Card</td>
                            <td>
                                Gigabyte WINDFORCE OC GeForce RTX 4070 12 GB
                                Video Card
                            </td>
                        </tr>
                        <tr>
                            <td>Video Card</td>
                            <td>
                                Gigabyte GAMING OC Radeon RX 7800 XT 16 GB Video
                                Card
                            </td>
                        </tr>
                        <tr>
                            <td>Power Supply</td>
                            <td>
                                Corsair RMe (2023) 1200 W 80+ Gold Certified
                                Fully Modular ATX Power Supply
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Is this overkill? Yes. Do I care? No. The idea was to build
                    a system that could handle gaming under two environments,
                    but not necessarily at the same time. It might come as a
                    surprise which games run better under Linux than Windows,
                    and vice versa.
                </p>

                <h3>Part 2: Installing Linux</h3>
                <p>
                    I am no stranger to installing Linux on bare metal and
                    virtual machines. However, something that did cause me some
                    trouble was trying to find a kernel version that could
                    support my graphics cards. Initially, I wanted to go with
                    Debian 12. I like the stability that Debian provides, and
                    wanted a system that was rock solid. Unfortunately, after
                    several attempts at installing Debian 12, I learned that
                    it's kernel (6.1.x at the time of writing this) did not
                    contain drivers for my AMD card. I attempted to upgrade to
                    Debian unstable (Sid), but found that my PC got stuck in a
                    reboot loop that dropped into the BIOS each time the
                    computer turned on. Eventually, I settled on Fedora. I had a
                    bit of experience using Fedora in college, so I felt
                    comfortable-ish with doing more advanced system
                    administration.
                </p>
                <p>
                    As an aside, I have a server that runs Debian 12. It's main
                    purpose is to be a development environment and to host
                    multiplayer game servers. I also have a Raspberry Pi that is
                    running Raspbian (Debian), so the notion of having a
                    homogenous Debian based home network was very attractive.
                </p>
                <p>
                    Once Fedora was installed, I had no issues with my AMD
                    graphics card. It worked right out of the box with no
                    additional tweaks.
                </p>

                <h3>Part 3: Configuring the kernel for PCI passthrough</h3>
                <p>
                    This page is not meant to be a tutorial, but I'll mention
                    some of the important parts to get this working.
                </p>
                <p>
                    First, you must add a few kernel command line arguments
                    within your bootloader. I use GRUB. In my GRUB config (
                    <code className="code-inline">/etc/default/grub</code>),
                    I've added the following line:
                </p>

                <code className="code-block">
                    GRUB_CMDLINE_LINUX_DEFAULT="rhgb quiet intel_iommu=on
                    iommu=pt kvm.ignore_msrs=1 default_hugepagesz=1G
                    hugepagesz=1G hugepages=32"
                </code>

                <p>
                    For my Intel processor, I set{" "}
                    <code className="code-inline">intel_iommu=on</code>. I've
                    read that <code className="code-inline">iommu=pt</code>
                    is good for improving the guest VM's performance, though I
                    don't really know what it does. Likewise, setting up
                    hugepages is good for improving performance of the VM.
                </p>

                <h3>Part 4: Isolating the NVIDIA GPU</h3>
                <p>
                    Now that the kernel has IOMMU turned on, we can begin to
                    isolate the GPU. Refer to section 3 of the Arch Wiki (listed
                    below) for the necessary steps according to your specific
                    setup. In my case, I had to figure out which PCI devices
                    belonged to the NVIDIA card and set up the correct modprobe
                    configuration. These PCI devices should belong to the same
                    IOMMU group. To find these groups, run the script provided
                    in section 2.2 of the Arch Wiki. Once that was complete,
                    everything just worked.
                </p>

                <p>
                    For example, below is my{" "}
                    <code className="code-inline">
                        /etc/modprobe.d/vfio.conf
                    </code>{" "}
                    file:
                </p>

                <code className="code-block">
                    options vfio-pci ids=10de:2786,10de:22bc
                </code>

                <h3>Part 5: Setting up Windows 11</h3>
                <p>
                    I use{" "}
                    <a href="https://virt-manager.org/">
                        Virt Manager (Virtual Machine Manager)
                    </a>{" "}
                    to manage my QEMU/KVM virtual machines. The setup process is
                    fairly simple. Create a new VM, allocate some memory, a
                    virtual hard disk image, etc. Then, add the isolated GPU as
                    a PCI device. Install Windows 11 as usual, and away you go.
                </p>

                <p>
                    <strong>Hey!</strong> It is really important to realize
                    something. Once your GPU is isolated to the VM, you need to
                    connect a spare monitor to your graphics card. Do NOT use
                    the VM's virtual display. The whole point is to use the
                    physical GPU with the VM, and that includes any spare HDMI
                    or DVI ports.
                </p>

                <p>
                    Once you're up and running, there are a bunch of tweaks you
                    can make to tailor your system to your needs. I've done a
                    few things, like enable hugepages and CPU core pinning,
                    which have increased performance and stability immensely.
                </p>

                <h3>Sources</h3>
                <ul>
                    <li>
                        <a href="https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF">
                            PCI passthrough via OVMF
                        </a>
                    </li>
                    <li>
                        <a href="https://youtu.be/h7SG7ccjn-g?si=UIQi9TUKJXFzcPa_">
                            How I Built The "Poor-Shamed" Computer...
                        </a>
                    </li>
                    <li>
                        <a href="https://youtu.be/WYrTajuYhCk?si=KWHs5JDduHZXnMF6">
                            I Made The Greatest Windows 11 Virtual Machine...
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mateussouzaweb/kvm-qemu-virtualization-guide/blob/master/Docs/05%20-%20XML%20Configurations.md">
                            KVM/QEMU XML Configuration Tips
                        </a>
                    </li>
                    <li>
                        <a href="https://www.baeldung.com/linux/grub-menu-management">
                            Managing the GRUB Menu in Fedora Distributions
                        </a>
                    </li>
                </ul>

                <span className="timestamp">
                    Last modified: 2024/04/04 10:22:21
                </span>
                <Link to="/projects">Go back</Link>
            </div>
        );
    }
}

export default PCBuild;
