class Mahasiswa {
    private double ipk;
    private double ips;

    public double getIPK() {
        return this.ipk;
    }

    public double getIPS() {
        return this.ips;
    }

    public double hitungIpk(int totbot, int totsks) {
        this.ipk = totbot / totsks;
        return this.ipk;
    }

    public double hitungIps(int totbbambil, int totsksambil) {
        this.ips = totbbambil / totsksambil;
        return this.ips;
    }
}